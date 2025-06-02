import { RECORD } from '@/app/view-code/[uid]/page';
import { Button } from '@/components/ui/button';
import Constants from '@/data/Constants';
import { Code } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function DesignCard({ item }: any) {
    const modelObj = item && Constants.AiModelList.find((x => x.name == item?.model));
    return (
        <div className='p-4 sm:p-5 border rounded-lg'>
            <Image
                src={item?.imageUrl}
                alt='image'
                width={300}
                height={200}
                className='w-full h-48 sm:h-[200px] object-cover bg-white rounded-lg'
            />

            <div className='mt-3 sm:mt-4'>
                <h2 className='line-clamp-3 text-gray-400 text-sm sm:text-base'>{item?.description}</h2>

                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mt-4'>
                    <div className='flex items-center gap-2 p-2 bg-gray-50 rounded-full'>
                        {modelObj && (
                            <Image
                                src={modelObj?.icon}
                                alt={modelObj?.modelName ?? ''}
                                width={30}
                                height={30}
                            />
                        )}
                        <h2 className='text-sm sm:text-base'>{modelObj?.name}</h2>
                    </div>

                    <Link href={`/view-code/${item?.uid}`} className='w-full sm:w-auto'>
                        <Button className='w-full sm:w-auto bg-black hover:bg-gray-700 text-sm sm:text-base'>
                            <Code className='mr-2' />
                            View Code
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DesignCard;
