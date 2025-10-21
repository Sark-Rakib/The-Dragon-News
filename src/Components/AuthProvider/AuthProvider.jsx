import React, { createContext, useState, useEffect } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../firebase.init";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const updateUser = (updateUser) => {
    return updateProfile(auth.currentUser, updateUser);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
