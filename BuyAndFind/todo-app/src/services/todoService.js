const API_URL = "https://jsonplaceholder.typicode.com/posts"

export const fetchTodos = async() => {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('Failed to fetch to do list')

    const data = await response.json()

    return data.slice(0,5)
}

export const deleteTodo = async(id) => {
    const response = await fetch(`${API_URL}/${id}`, {method: 'DELETE',})
    if (!response.ok) throw new Error("failed to delete todo")
}