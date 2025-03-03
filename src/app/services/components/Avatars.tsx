import React from 'react'
import Image from 'next/image';

function Avatars() {
    const avatars = [
        "/avatars/hungry-shark.jpg",
        "/avatars/mommy-shark.jpg",
        "/avatars/daddy-shark.jpg",
        "/avatars/cold-shark.jpg",
        "/avatars/cold-shark.jpg",
        "/avatars/cold-shark.jpg",
        "/avatars/cold-shark.jpg",
        "/avatars/cold-shark.jpg",
    ];

    return (
        <div className='flex'>  {avatars.slice(0, 3).map((src, index) => (
            <div key={index} className={`w-8 h-8 rounded-full overflow-hidden border-3 border ${index !== 0 ? '-ml-3' : ''}`}>
                <Image
                    src={src}
                    alt={`Avatar ${index + 1}`}
                    width={32}
                    height={32}
                    className="rounded-full"
                />
            </div>
        ))}

            {avatars.length > 4 && (
                <div className="w-8 h-8 rounded-full overflow-hidden border-3 border -ml-3 flex items-center justify-center bg-main text-xs font-bold text-foreground">
                    +{avatars.length - 3}
                </div>
            )}</div>
    )
}

export default Avatars