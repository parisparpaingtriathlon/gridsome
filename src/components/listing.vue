<template>
    <div>
        <ul>
            <li>
                <g-link  to="/">Home</g-link>
            </li>
            <li v-if="$page.allTag" v-for="(tag, index) in $page.allTag.edges">
                <g-link
                        :to="tag.node.path"
                        :key="index"
                >{{tag.node.id}}</g-link>
            </li>
        </ul>
    </div>
</template>

<page-query>
  query {
    allTag {
      edges {
        node {
          id
          path
        }
      }
    }
  }
</page-query>
