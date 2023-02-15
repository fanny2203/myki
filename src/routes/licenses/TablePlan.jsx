export default function TablePlan () {
  const info = [
    { name: 'Storage', content: '250 GB Storage capacity'},
    { name: 'Transfer Files', content: '1000 GB Bandwidth'},
    { name: 'Backup', content: 'Automatic backups'},
    { name: 'Shared', content: 'Easy and secure data sharing'},
    { name: 'Control', content: 'Secure sending of large files'}
  ]

  const Column = ({ name, content }) => (
    <tr className="text-md h-10">
      <th className="font-normal">{name}</th>
      <th className="font-normal">{content}</th>
      <th></th>
      <th></th>
    </tr>
  )

  return <div className="w-full shadow-md shadow-[#BCBCBC] rounded-md p-5 mt-10">
    <table className="w-full text-left">
      <thead className="text-md capitalize h-20 border-b border-black">
        <tr>
          <th>Function</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {
          info.map((item, index) => <Column key={index} name={item.name} content={item.content} />)
        }
      </tbody>
    </table>
  </div> 
}