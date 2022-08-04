import { Navigate } from 'react-router-dom'

interface IPrivateRouteProps {
  children: JSX.Element
}

export const PrivateRoute = ({ children }: IPrivateRouteProps): JSX.Element => {
  const hasAccess = false

  return hasAccess ? children : <Navigate to={'/go-away'} />
}
