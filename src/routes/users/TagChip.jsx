import tag from '../../resources/icon/dashboard/tag.svg'
import './TagChip.css'
const TagChip = ({title, removeTag, readOnly}) => {
    return (
        <div className='hoverable' style={{
            display: 'flex',
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
            minWidth: '20%',
            justifyContent: 'space-between',
            padding: '5px 16px 5px 12px',
            marginLeft: '13px',
            marginBottom: '13px'
        }}>
            <img src={tag} alt='tag icon'/>
            <p>{title}</p>
            <button disabled={readOnly} onClick={() => removeTag(title)}>X</button>
        </div>
    )
}

export default TagChip