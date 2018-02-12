/* jshint esversion: 6 */
import axios from 'axios'

export const register = ({email, name, pwd}) => axios.post('https://douban.herokuapp.com/user/', {email, name, pwd})

export const search = (queryKey) => axios.post(`movie/search?q=/${queryKey}&count=3`)

export const loadMore = (skip) => axios.get(`/api/event/list?loc=108288&start=${skip}&count=3`)

export const getSingleEvent = (id) => axios.get(`/api/event/${id}`)

export const getMovie = (type, count) => axios.get(`/api/movie/${type}?count=${count}`)

export const getBook = (query, count) => axios.get(`/api/book/search?q=${query}&count=${count}`)

export const getSingleMovie = (classsify, id) => axios.get(`/api/${classsify}/subject/${id}`)

export const getSingleBook = (classsify, id) => axios.get(`/api/${classsify}/${id}`)

export const searchMovie = (movie) => axios.get(`/api/movie/search?q=${movie}&count=3`)

export const searchBook = (book) => axios.get(`/api/book/search?q=${book}&count=3`)

export const searchMusic = (music) => axios.get(`/api/music/search?q=${music}&count=3`)
