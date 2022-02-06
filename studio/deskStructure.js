import S from '@sanity/desk-tool/structure-builder'
import * as I18nS from 'sanity-plugin-intl-input/lib/structure';

import {
  GrDocumentText as FieldIcon,
  GrMultiple as DocumentIcon,
  GrTextAlignLeft as PostIcon,
  GrUser as AuthorIcon,
  GrArticle as ArticleIcon
} from 'react-icons/gr'

export const getDefaultDocumentNode = (props) => {
  return S.document();
};

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Field level')
        .icon(FieldIcon)
        .child(
          S.list()
            .id('field-level')
            .title('Field level translations')
            .items(
              [
                S.documentTypeListItem('article')
                  .icon(ArticleIcon),
                S.documentTypeListItem('author')
                  .icon(AuthorIcon),
              ]
            )
        ),
    ])
