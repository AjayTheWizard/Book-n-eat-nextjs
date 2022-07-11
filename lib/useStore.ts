import create from "zustand";

interface useStoreType {
  userName: string,
  email: string,
  isUser: boolean,
  imgLink: string,
  editUser: (userName: string, email: string) => void
  logOut: () => void
}

export const useStore = create<useStoreType>((set) => ({
  userName: "John Doe",
  email: "",
  isUser: false,
  imgLink: "https://avatars.dicebear.com/api/male/username.svg",
  editUser: (userName, email) => {
    set((prev) => ({ ...prev, userName, email, isUser: true }));
  },
  logOut: ()=>{
    set((prev)=>({ ...prev, userName: "John Doe", email: "", isUser: false }))
  }
}));
