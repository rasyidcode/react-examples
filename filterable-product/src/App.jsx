export default function App() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Search..." />
        <label>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </label>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="2">Fruits</th>
          </tr>
          <tr>
            <td><span>Apple</span></td>
            <td>$1</td>
          </tr>
          <tr>
            <td><span>Dragonfruit</span></td>
            <td>$1</td>
          </tr>
          <tr>
            <td><span style={{ color: 'red' }}>Passionfruit</span></td>
            <td>$2</td>
          </tr>
          <tr>
            <th colSpan="2">Vegetables</th>
          </tr>
          <tr>
            <td><span>Spinach</span></td>
            <td>$2</td>
          </tr>
          <tr>
            <td style={{ color: 'red' }}><span>Pumpkin</span></td>
            <td>$4</td>
          </tr>
          <tr>
            <td><span>Peas</span></td>
            <td>$1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
