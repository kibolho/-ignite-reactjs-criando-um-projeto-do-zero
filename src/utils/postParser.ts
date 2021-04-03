import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}
export const postParser = (post): Post => ({
  uid: post.uid,
  first_publication_date: format(
    new Date(post.first_publication_date),
    'dd MMM yyyy',
    {
      locale: ptBR,
    }
  ),
  data: {
    title: post.data.title ?? null,
    subtitle: post.data.subtitle ?? null,
    author: post.data.author ?? null,
  },
});
