function Card({image, headerTitle, cardDesc, footerName , footerImg  ,tag , datePublished}) {
    return (
        <div className={`border flex flex-col w-[85%] h-auto md:max-w-80 md:max-h-110 rounded-xl p-5 bg-white font-custom gap-3 shadow-[10px_9px_5px_-3px_#000000]

` } >
            <img name="Header Image" src={image} alt="Header Image" className="w-full  h-50 rounded-xl object-cover"></img>
            
            <div className="flex flex-col items-start justify-between gap-4">
                <span className="text-xs font-bold px-2 py-1 rounded-md bg-[#F4D14D] text-slate-900">
                    {tag}
                </span>
                <span className="text-xs font-semibold text-gray-950">
                    {datePublished}
                </span>
            </div>

            <div className="flex flex-col items-start justify-between gap-4">
                 <h1 className="font-extrabold">{headerTitle}</h1>
                 <p className="text-[12px] text-gray-500">{cardDesc}</p>
            </div>
           

            <div className="flex gap-2">
                <img name="Footer Image" src={footerImg} alt="footer image" className="w-5 h-5"></img>
                <span className="text-[12px] font-extrabold">{footerName}</span>
            </div>
           
        </div>

    )

}

export default Card;