type NavigationButtonParams = {
  label: string
}

export default function NavigationButton({ label }: NavigationButtonParams) {
  return (
    <div >
      {label}
    </div>
  )
}