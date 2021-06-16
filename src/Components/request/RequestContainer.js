import { useRequestStore } from '../../store/RequestStore'
import MainContainer from '../shared/MainContainer'
import Guidelines from './Guidelines'
import RequestDetails from './RequestDetails'

export default function RequestContainer() {
   const current = useRequestStore((state) => state.current)

   return (
      <MainContainer>
         {current === 0 && <Guidelines />}
         {current === 1 && <RequestDetails />}
      </MainContainer>
   )
}
