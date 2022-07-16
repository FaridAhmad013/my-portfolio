const BackToTop = () => {

  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <button title='Kembali Keatas' onClick={handleClick} className="fixed ${toggle bottom-[4%] right-[4%] z-50 bg-indigo-400 p-4 rounded-full animate-bounce hover:bg-indigo-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-50" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
    </button>
  )
}

export default BackToTop