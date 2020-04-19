<template>
    <div>
        <ul>
            <li>
                <g-link  to="/">Home</g-link>
            </li>
            <li>
                <g-link  to="/members">Membres</g-link>
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

<style lang="css" scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333333;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }

    li a:hover {
        background-color: red;
    }
</style>
