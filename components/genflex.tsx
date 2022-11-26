import './genflex.module.css'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Genflex = ({ preview, children }: Props) => {
  return (
    <>
    <div className="genflex-r cc">
    {children}
    </div>
    </>
  )
}

export default Genflex
