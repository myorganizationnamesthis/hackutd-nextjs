export function Main() {
  return (
    <div class='h-screen flex'>
      {/* <!-- Scroll wrapper --> */}
      <div class='flex-1 flex overflow-hidden'>
        {/* <!-- Scrollable container --> */}
        <div class='flex-1 overflow-y-scroll'>
          {/* <!-- Your content --> */}
        </div>
      </div>

      {/* <!-- Fixed sidebar --> */}
      <div class='bg-primary w-1/2'>{/* <!-- Sidebar content --> */}</div>
    </div>
  )
}
