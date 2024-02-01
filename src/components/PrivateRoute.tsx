import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

type Props = {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: Props) {
  const { user } = useUser();

  return user?.id ? children : <Navigate to="/login" replace />;
}
