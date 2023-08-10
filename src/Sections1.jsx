import BorderCurve from './BorderCurve'

function Sections1() {
  return (
    <div className={` -z-10 h-screen relative bg-sky-400 flex justify-center border-4 border-rose-700`}>
      <h1 className="text-5xl text-center rounded-2xl py-4 px-6">Hero</h1>
      <BorderCurve />
    </div>
  )
}

export default Sections1
