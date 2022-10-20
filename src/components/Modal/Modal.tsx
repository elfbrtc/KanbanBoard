import React, { FC, useState, useEffect } from 'react'
import { useBoardDetailContext } from '../../contexts/BoardDetailContext/BoardDetailContext'
import BoardDetailModalCard from '../BoardDetailModalCard'
import ModalCheckList from '../ModalCheckList'
import ModalDescriptionTextField from '../ModalDescriptionTextField'
import ModalTextField from '../ModalTextField'
import ModalTopBar from '../ModalTopBar'
import { ModalProps } from './Modal.types'
import { boardDetail } from '../../services/http/scrumboard/endpoints/boardDetail'
import { ModalCardType } from '../ModalTopBar/ModalTopBar.types'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ModalComment from '../ModalComment'
import ModalCommentItem from '../ModalCommentItem'
import ModalLabelChip from '../ModalLabelChip'

const Modal: FC<ModalProps> = (props) => {

  const [card, setCard] = useState<ModalCardType>()
  const [isLoading, setIsLoading] = useState(true)

  const [ lastUpdate, setLastUpdate ] = useState(0);

  const boardDetailContext = useBoardDetailContext()

  useEffect(() => {
    console.log("Geldi")
    const getCardById = async () => {
      setIsLoading(true)
      await boardDetail.getCardById(props.cardId).then((data: any) => {
        setCard(data.data);
        setIsLoading(false)
      })
    };
    getCardById()

  }, [])

  const handleOnDueDateClick = () => {

  }

  const handleOnCheckListClick = () => {

  }

  const handleOnLabelClick = () => {

  }

  const handleOnCloseClick = () => {
    props.onClose?.()
  }

  const handleAddNewItem = () => {
    const list = boardDetailContext.state.singleList.find((list: any) => list.cards.find((cList: any) => cList.id === card!!.id))
    const newCard = list?.cards.find((cList: any) => cList.id === card!!.id)
    setCard({...newCard})
    setLastUpdate(Date.now());
    props.onUpdate?.()
  }

  return (
    <>
      {
        isLoading ? (
          <div>Loading..</div>
        ) : (
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto m-6 mx-auto max-w-3xl h-full items-center justify-center">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className=''>
                  <ModalTopBar onChangeItem = {handleAddNewItem} card={card} onCloseClick={handleOnCloseClick} onDueDateClick={handleOnDueDateClick} onCheckListClick={handleOnCheckListClick} onLabelClick={handleOnLabelClick} /></div>
                <ModalTextField value = {card!!.title} />
                <ModalDescriptionTextField />
                {
                  boardDetailContext.state.singleList &&
                  boardDetailContext.state.singleList.filter((list: any) => list.id === card!!.listId).map((singleList: any) =>
                    singleList.cards.filter((_card: any) => _card.id === card!!.id).map((singleCard: any) => (
                      singleCard.checklists.map((checklist: any, key: any) => (
                        <ModalCheckList onAddChecklistItem = {handleAddNewItem} checklist = {checklist} key = {key} />
                      ))
                    ))
                  )
                }
                {
                  card?.labels && card?.labels.length > 0 ? (<ModalLabelChip onRemoveItem = {handleAddNewItem} card = {card} />) : null
                }               
                <ModalComment card = {card} onAddComment={handleAddNewItem}/>
                {
                  card?.comments.length > 0 ? (<ModalCommentItem card = {card} />) : null
                }
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
        )
      }

      {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </>



  )
}


export default Modal