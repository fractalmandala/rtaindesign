

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Mother = ({ preview, children }: Props) => {
  return (
    <>
    
    <div className="mother">
      {children}
    </div>
    </>
  )
}

export default Mother