"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { CloudUpload, Loader2Icon, WandSparkles, X } from 'lucide-react'
import Image from 'next/image'
//@ts-ignore
import uuid4 from "uuid4";
import React, { ChangeEvent, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/configs/firebaseConfig'
import axios from 'axios'
import { useAuthContext } from '@/app/provider'
import { useRouter } from 'next/navigation'
import Constants from '@/data/Constants'
import { toast } from 'sonner'

function ImageUpload() {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [file, setFile] = useState<any>();
    const [model, setModel] = useState<string>();
    const [description, setDescription] = useState<string>();
    const { user } = useAuthContext();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const OnImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const imageUrl = URL.createObjectURL(files[0]);
            setFile(files[0]);
            setPreviewUrl(imageUrl);
        }
    }

    const OnConverToCodeButtonClick = async () => {
        if (!file || !model || !description) {
            toast('Please fill in all fields.');
            return;
        }
        setLoading(true);
        const fileName = Date.now() + '.png';
        const imageRef = ref(storage, "Wireframe_To_Code/" + fileName);
        await uploadBytes(imageRef, file);
        const imageUrl = await getDownloadURL(imageRef);
        const uid = uuid4();

        const result = await axios.post('/api/wireframe-to-code', {
            uid,
            description,
            imageUrl,
            model,
            email: user?.email
        });

        if (result.data?.error) {
            toast('Not Enough Credits!');
            setLoading(false);
            return;
        }
        setLoading(false);
        router.push('/view-code/' + uid);
    }

    return (
        <div className="mt-10 max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                    {!previewUrl ? (
                        <div className="border-dashed border-2 rounded-2xl p-8 flex flex-col items-center h-full justify-center text-center bg-muted shadow-lg">
                            <CloudUpload className="h-10 w-10 text-muted-foreground" />
                            <h2 className="font-semibold text-lg mt-2">Upload Wireframe</h2>
                            <p className="text-sm text-gray-500 mt-1">Click below to select your wireframe image</p>
                            <div className="mt-4">
                                <label htmlFor="imageSelect" className="cursor-pointer bg-gray-200 hover:bg-gray-900 hover:text-white transition px-5 py-2 rounded-md font-medium">
                                    Select Image
                                </label>
                                <input
                                    type="file"
                                    id="imageSelect"
                                    className="hidden"
                                    onChange={OnImageSelect}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="relative border rounded-2xl overflow-hidden shadow-md bg-white">
                            <Image
                                src={previewUrl}
                                alt="preview"
                                width={500}
                                height={500}
                                className="w-full h-full object-contain bg-white"
                            />
                            <button
                                onClick={() => setPreviewUrl(null)}
                                className="absolute top-2 right-2 p-1 bg-white rounded-full shadow hover:bg-red-100 transition"
                            >
                                <X className="h-5 w-5 text-gray-600" />
                            </button>
                        </div>
                    )}
                </div>

                <div className="flex-1 bg-muted rounded-2xl p-6 shadow-lg">
                    <h2 className="text-lg font-semibold mb-2">Select AI Model</h2>
                    <Select onValueChange={(value) => setModel(value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Choose a model" />
                        </SelectTrigger>
                        <SelectContent>
                            {Constants?.AiModelList.map((model, index) => (
                                <SelectItem key={index} value={model.name}>
                                    <div className="flex items-center gap-2">
                                        <Image src={model.icon} alt={model.name} width={24} height={24} />
                                        <span>{model.name}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <h2 className="text-lg font-semibold mt-6 mb-2">Describe Your Webpage</h2>
                    <Textarea
                        onChange={(e) => setDescription(e.target.value)}
                        className="h-auto"
                        placeholder="e.g. A landing page with a hero section, call-to-action, and responsive layout"
                    />
                </div>
            </div>

            <div className="mt-10 flex justify-center">
                <Button
                    className="bg-black hover:bg-gray-800 transition text-white px-6 py-2 rounded-md flex items-center gap-2"
                    onClick={OnConverToCodeButtonClick}
                    disabled={loading}
                >
                    {loading ? <Loader2Icon className="animate-spin h-5 w-5" /> : <WandSparkles className="h-5 w-5" />}
                    Convert to Code
                </Button>
            </div>
        </div>
    );
}

export default ImageUpload;
