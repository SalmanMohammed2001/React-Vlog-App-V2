


const Card = ({title,content}) => {
    return (
        <div className={"w-60 border-2 border-solid p-1 m-4 "}>
            <div className={'text-center'}>
                <h1 className={'font-bold text-2xl'}>{title}</h1>
            </div>

            <div className={'m-h-2'}>
                <p className={'my-5 '}>{content}</p>
            </div>

            <div className={'flex items-center justify-center'}>
                <button className={' bg-green-600 p-2'}> Read More</button>
            </div>


        </div>
    )

}


export default Card