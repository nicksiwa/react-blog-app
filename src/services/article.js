import service from './config';

export const fetchArticlesService = () => service.get('/articles').then(res => res.data);
export const createArticleService = data => service.post('/articles', data).then(res => res.data);
export const updateArticleService = (data, id) => service.put(`/articles/${id}`, data).then(res => res.data);
export const deleteAriticleService = id => service.delete(`/articles/${id}`, { id }).then(res => res.config.id);
