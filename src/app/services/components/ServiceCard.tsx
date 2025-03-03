import React from 'react'
import Image from 'next/image';
import Chart from './PieChart';
import Button from '@/components/Button';
import Avatars from './Avatars';
import { ExternalLink, EllipsisVertical } from 'lucide-react';

function ServiceCard() {
    const tags = ["😊", "🥁", "🥁", "🥁"]; // Example tags

    return (
        <div>
            <div className='p-2 bg-card rounded-xl shadow-sm flex-1 flex h-30 gap-2 relative'>
                <div className="rounded-lg overflow-hidden bg-primary w-30 relative">
                    <Image
                        src="/services/sunday-service.jpg"
                        alt="Sunday School"
                        width={250}
                        height={250}
                        style={{ objectFit: "none" }}
                        className="rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 font-bold">
                        <div className='text-3xl text-white'>02</div>
                        <div className='-mt-3 text-white'>March</div>
                        <div className='-mt-1 text-xs bg-main px-1 rounded-full'>09:00am</div>
                    </div>
                </div>
                <div className="flex w-70">
                    <div className='flex flex-col flex-1 justify-between'>
                        <div className="text-2xl font-bold">
                            Sunday School
                        </div>
                        {/* <div>
                            UEC Canubing 2 Church Building
                        </div> */}
                        <div className="flex justify-between w-full -mt-4">
                            <div className='w-full'>
                                Kids Ministry
                            </div>
                            <div className="flex w-full items-center">
                                {tags.slice(0, 3).map((tag, index) => (
                                    <div
                                        key={index}
                                        className="bg-main border-2 text-foreground text-xs font-medium h-8 w-8 rounded-full border -ml-2 first:ml-0 flex justify-center items-center"
                                    >
                                        {tag}
                                    </div>
                                ))}

                                {/* Show "+X more" if there are extra tags */}
                                {tags.length > 3 && (
                                    <span className="bg-main text-foreground text-xs font-medium h-8 w-8 border-2 rounded-full border -ml-3 first:ml-0 flex justify-center items-center">
                                        +{tags.length - 3}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-1">
                            {/* <Button color='warning' text='Archive' rounded='full' className='w-full h-[30px] py-0' icon={<ExternalLink className='h-4 w-4' />} /> */}
                            <Button color='primary' text='Open' rounded='full' className='w-full h-[30px] py-0' icon={<ExternalLink className='h-4 w-4' />} />
                        </div>
                    </div>
                    {/* Donut Chart */}
                    {/* <div className="flex justify-center items-center w-30">
                        <Chart />
                        </div> */}

                    {/* <div className='flex justify-center items-center w-30'>
                        <Button color='info' text='Open' rounded='full' className='w-[70%] h-[30px] py-0' icon={<ExternalLink className='h-4 w-4' />} />
                    </div> */}

                </div>
                <div className="absolute right-0">
                    <Button variant='plain' icon={<EllipsisVertical />} className='hover:bg-transparent' />
                </div>
            </div>

        </div>
    )
}

export default ServiceCard