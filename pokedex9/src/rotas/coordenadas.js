export const goToHome = (navigate) => {
    navigate('/')
}

export const goToPokedex = (navigate) => {
    navigate('/pokedex')
}

export const goToPokedexDetails = (navigate, id) => {
    navigate (`/pokedex/details/${id}`)
}

export const goToBackPage = (navigate) => {
    navigate (-1)
}