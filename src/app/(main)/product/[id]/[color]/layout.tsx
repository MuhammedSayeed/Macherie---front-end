
interface IProps{
    children: React.ReactNode
}
const layout = ({children} : IProps) => {
  return (
    <div className="px-3 pt-[9rem] md:pt-[6rem]">
        {children}
    </div>
  )
}

export default layout