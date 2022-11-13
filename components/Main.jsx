export function Main() {
  return (
    <div className='h-screen flex'>
      {/* <!-- Scroll wrapper --> */}
      <div className='flex-1 flex overflow-hidden'>
        {/* <!-- Scrollable container --> */}
        <div className='flex-1 overflow-y-scroll'>
          {/* <!-- Your content --> */}
        </div>
      </div>

      {/* <!-- Fixed sidebar --> */}
      <div className='bg-primary w-1/2'>{/* <!-- Sidebar content --> */}</div>
    </div>
  )
}
