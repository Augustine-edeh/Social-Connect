const SettingsOption = ({ title, onClick }) => {
  return (
    <div>
      <p className="py-[20px] pl-[21px] border-b-2 cursor-pointer" 
        onClick={onClick}>
        <b>{title}</b>
      </p>
    </div>
  )
}

export default SettingsOption
