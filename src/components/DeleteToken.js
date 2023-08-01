
export default function deleteToken() {
    setTimeout(() => {
        localStorage.removeItem('token')
    },600000)
}
