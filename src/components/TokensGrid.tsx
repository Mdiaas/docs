import '../styles/tokens-grid.css'
interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
}

export function TokensGrid({ tokens, hasRemValue = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <th>Name</th>
        <th>Value</th>
        {hasRemValue && <th>Pixels</th>}
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>

              {hasRemValue && (
                <td>{16 * Number(value.replace('rem', ''))}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
