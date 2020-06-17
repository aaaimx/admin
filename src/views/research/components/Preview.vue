<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <el-tag size="mini" type="success" effect="plain">
        {{ research.type }}
      </el-tag>
      <el-tag size="mini" type="warning">
        {{ research.pub_type || research.grade || research.year }}
      </el-tag>
      <br />
      <br />
      <strong>{{ research.title }}</strong> <br />
      <small style="color: gray">Jan {{ research.year }}</small> <br />
      <small v-if="research.projects[0]" style="color: gray"
        >Project:
        <router-link
          style="text-decoration: underline"
          tag="a"
          :to="{
            name: 'EditProject',
            params: { id: research.projects[0] }
          }"
          >{{ research.projects[0] }}</router-link
        ></small
      >
      <el-button style="float: right; padding: 3px 0" type="text">{{
        research.pub_in || research.event || 'Full-text'
      }}</el-button>
    </div>

    <a v-for="author in research.authors" :key="author.id" class="text item">
      <!-- <el-popover placement="top-start" trigger="hover">
        <div class="el-popover__title">
          <router-link
            class="link-type"
            :to="'/members/' + author.member"
            tag="a"
            >{{ author.name }} {{ author.surname }}
            <sup class="link-type">{{ author.position }}</sup
            ><br
          /></router-link>
        </div>
        <router-link :to="'/partners/' + author.adscription" tag="a">{{
          author.adscription
        }}</router-link>

        <el-avatar :size="30" slot="reference">
          <small>
            {{ author.name.slice(0, 1) }}
          </small>
        </el-avatar></el-popover
      >&nbsp; -->
      <router-link class="link-type" :to="'/members/' + author.member" tag="a"
        >{{ author.name }} {{ author.surname }}
        <sup class="link-type">{{ author.position }}</sup
        ><br
      /></router-link>
    </a>
    <aside v-if="research.resume" style="margin-top:15px; line-height: 21px">
      <small>
        {{ research.resume }}
      </small>
    </aside>

    <p class="info"></p>
    <hr />
    <div>
      <el-tag
        v-for="item in lines.filter(l => research.lines.indexOf(l.id) !== -1)"
        :key="item.id"
        size="small"
        type="info"
      >
        {{ item.topic }}
      </el-tag>
    </div>
  </el-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['research'],
  computed: {
    ...mapState('projects', ['lines'])
  }
}
</script>
