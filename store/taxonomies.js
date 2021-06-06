// TODO: Migrate to TNT.
//       This file is now a general purpose taxonomies fetch that
//       works for any given property and taxonomy.
//       E.g. 'blog/tags', 'code/skills', '[property]/[taxonomy]'
//       This is really handy.

import flow from 'lodash/fp/flow'
import flatten from 'lodash/fp/flatten'
import compact from 'lodash/fp/compact'
import uniq from 'lodash/fp/uniq'
import map from 'lodash/fp/map'
import kebabCase from 'lodash/fp/kebabCase'

export const actions = {
  async all({}, { property, taxonomy }) {
    const articles = await this.$content(property).fetch()

    let terms = articles.map(article => article[taxonomy])

    terms = flow(
      flatten,
      compact,
      uniq,
      map(term => { return { slug: kebabCase(term), title: term } })
    )(terms)

    return terms
  },

  async find({ dispatch }, { property, taxonomy, slug }) {
    const terms = await dispatch('all', { property, taxonomy })

    const term = terms.find(term => term.slug === slug)

    return term
  }
}
