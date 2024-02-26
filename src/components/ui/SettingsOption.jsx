import { ChevronRightIcon } from '@heroicons/react/24/solid'

const SettingsOption = ({ title, onClick }) => {
  return (
    <div>
      <p className="py-[20px] pl-[21px] pr-[31px] border-b-2 cursor-pointer 
        flex justify-between " 
        onClick={onClick}>
        <b>{title}</b>
        <ChevronRightIcon
          className="h-6 w-6 cursor-pointer"
          onClick={() => navigateTo("/")} />
      </p>
    </div>
  )
}

export default SettingsOption
