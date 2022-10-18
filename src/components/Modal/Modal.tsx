import React, { FC, useState } from 'react'
import BoardDetailModalCard from '../BoardDetailModalCard'
import ModalDescriptionTextField from '../ModalDescriptionTextField'
import ModalTextField from '../ModalTextField'
import ModalTopBar from '../ModalTopBar'
import { ModalProps } from './Modal.types'

const Modal: FC<ModalProps> = (props) => {

  const handleOnDueDateClick = () => {

  }

  const handleOnCheckListClick = () => {

  }

  const handleOnLabelClick = () => {

  }

  const handleOnCloseClick = () => {
    props.onClose?.()
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className=''>
              <ModalTopBar onCloseClick = { handleOnCloseClick } onDueDateClick={handleOnDueDateClick} onCheckListClick={handleOnCheckListClick} onLabelClick={handleOnLabelClick}/></div>
            
            <ModalTextField/>
            <ModalDescriptionTextField/>
            <div className="flex items-start justify-between border-b border-solid border-slate-200 rounded-t">


              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={props.onClose}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>


            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={props.onClose}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={props.onClose}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>



  )
}


export default Modal