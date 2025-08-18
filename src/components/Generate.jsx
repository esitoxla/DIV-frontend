import React from 'react'

export default function Generate() {
  return (
    <div className="bg-gray-300 h-full w-full">
      <div className="container flex">
        <div className="p-5 m-5">
          <h2>Create your QR Code</h2>
          <h3>Create all QR Codes</h3>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Download
        </button>
      </div>

      <form className="bg-white mt-5 ml-10 mr-10 border-1 border-gray-400 rounded-md">
        <h2 className="text-xl p-5 m-5">Website URL</h2>
        <label className="text-lg p-5 m-5">Enter URL</label>
        <br />
        <input
          className="p-5 m-5 w-lg h-10 border-gray-400 hover:border-gray-100"
          type="url"
          placeholder="http;//letusgo,com"
        />
      </form>
      <form className="bg-white mt-5 ml-10 mr-10 border-1 border-gray-400 rounded-md">
        <h2 className="text-xl p-5 m-5">Shapes & Color</h2>

        <div className="m-10 p-5 border-1 border-gray-50">
          <h3>Shapes</h3>
          <div className="flex justify-around">
            <img className="w-10" src="/qrpic.png" />
            <img className="w-10" src="/qrpic1.jpg" />
            <img className="w-10" src="/qrpic.png" />
            <img className="w-10" src="/qrpic1.jpg" />
            <img className="w-10" src="/qrpic.png" />
            <img className="w-10" src="/qrpic1.jpg" />
          </div>
        </div>

        <label className="text-lg p-5 m-5">Enter URL</label>
        <br />
        <input
          className="p-5 m-5 w-lg h-10 hover:border-gray-100"
          type="url"
          placeholder="http;//letusgo,com"
        />
      </form>
      <form className="bg-white mt-5 ml-10 mr-10 border-1 border-gray-400 rounded-md">
        <h2 className="text-xl p-5 m-5">Logo</h2>
        <label className="text-lg p-5 m-5">Uploaded Logo</label>
        <br />
        <input
          className="p-5 m-5 w-lg h-10 border-gray-400 hover:border-gray-100"
          type="file"
          placeholder="http;//letusgo,com"
        />
        <h2 className="text-lg p-5 m-5">Or Choose from here</h2>
      </form>
      <form className="bg-white mt-5 ml-10 mr-10 border-1 border-gray-400 rounded-md">
        <h2 className="text-xl p-5 m-5">Folder</h2>
        <label className="text-lg p-5 m-5">Folder</label>
        <br />
        {/* <input className='p-5 m-5 w-lg h-10 border-gray-400 hover:border-gray-100' type='url' placeholder='http;//letusgo,com' /> */}
        <select
          className="p-5 m-5 w-lg h-10 border-gray-400 hover:border-gray-100 "
          placeholder="Event"
        >
          <option></option>
        </select>
      </form>
    </div>
  );
}
