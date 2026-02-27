const API_BASE_URL = 'http://localhost:3000'

export async function fetchEndpoint(path) {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`)
    const data = await response.json()
    return {
      status: response.status,
      data,
      error: null,
    }
  } catch (error) {
    return {
      status: null,
      data: null,
      error: error.message || 'Failed to connect to the server',
    }
  }
}

export async function checkServerHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      signal: AbortSignal.timeout(5000),
    })
    return response.ok
  } catch (error) {
    return false
  }
}
