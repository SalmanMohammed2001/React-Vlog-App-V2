


const Header=()=>{
    return (
        <div className={'flex bg-green-100 p-3 items-center justify-between'}>
            <img src="src/assets/logo.png" alt="" className={'w-[100px]'}/>
            <ul className={'flex gap-[4vw]'}>
                <li>Article</li>
                <li>My Article</li>
                <li>Write Article</li>
                <li>Create An  Account/Login</li>

            </ul>
        </div>
    )
}
export default Header;