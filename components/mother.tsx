import styles from './mystyles.module.css'


type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Mother = ({ preview, children }: Props) => {
  return (
    <>
    
    <div className="mother bk-black">
      {children}
    </div>
    </>
  )
}

export default Mother