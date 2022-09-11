import Spinner from "node_modules/react-spinner-material/lib/index";

export default function Loader(): JSX.Element {
  return (
    <div className="loader">
      <Spinner color="red" />
    </div>
  )
}
