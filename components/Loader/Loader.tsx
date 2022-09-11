import FadeIn from 'node_modules/react-fade-in/lib/FadeIn'
import Spinner from 'node_modules/react-spinner-material/lib/index'

export default function Loader(): JSX.Element {
  return (
    <FadeIn>
      <div className="loader">
        <Spinner color="red" />
      </div>
    </FadeIn>
  )
}
