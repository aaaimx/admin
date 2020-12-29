<template>
  <el-card style="margin: 5px" class="box-card-component">
    <div slot="header" class="clearfix">
      <span
        ><el-tag size="mini" effect="dark" type="secondary">{{
          cert.type
        }}</el-tag></span
      >
      <div style="float: right;">
        <el-dropdown size="small" class="hidden-md-and-up" type="primary">
          <el-button size="mini" circle icon="el-icon-more"></el-button>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              ><el-link
                :underline="false"
                type="text"
                @click="$router.push('/certificates/' + cert.uuid)"
                >Edit</el-link
              ></el-dropdown-item
            >
            <el-dropdown-item>
              <el-link :underline="false" @click="sendEmail(cert)" type="text"
                >Send by email</el-link
              >
            </el-dropdown-item>
            <el-dropdown-item
              v-clipboard:copy="cert.uuid"
              v-clipboard:success="clipboardSuccess"
              >Copy <b>UUID</b></el-dropdown-item
            >
            <el-dropdown-item
              ><a :href="cert.file" target="_blank" download>
                Download
              </a></el-dropdown-item
            >
            <el-dropdown-item divided>
              <el-link
                :underline="false"
                @click="publish(cert, !cert.published)"
                type="text"
                >{{ cert.published ? 'Draft' : 'Publish' }}</el-link
              >
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <el-button-group class="hidden-sm-and-down">
          <!-- <el-button
            size="mini"
            @click="$router.push('/certificates/' + cert.uuid)"
            round
            icon="el-icon-edit"
          ></el-button> -->
          <el-button
            :loading="cert.sending"
            size="mini"
            @click="sendEmail(cert)"
            round
            icon="el-icon-s-promotion"
          ></el-button>
          <el-button
            size="mini"
            v-clipboard:copy="cert.uuid"
            v-clipboard:success="clipboardSuccess"
            round
            icon="el-icon-paperclip"
          ></el-button>
          <el-button size="mini" round>
            <a :href="cert.QR" target="_blank" download>
              <i class="el-icon-top-right"></i>
            </a>
          </el-button>
          <el-button
            plain
            :type="cert.published ? 'success' : 'danger'"
            @click="publish(cert, !cert.published)"
            size="mini"
            :icon="cert.published ? 'el-icon-open' : 'el-icon-turn-off'"
            round
          >
          </el-button>
        </el-button-group>
      </div>
    </div>
    <el-image :preview-src-list="[cert.file]" fit="cover" :src="cert.file" />

    <div>
      <router-link tag="a" :to="'/certificates/' + cert.uuid">{{ cert.to }}</router-link> <br />

      <div class="bottom clearfix">
        <span>
          <el-tag size="mini" v-if="cert.published" type="success">
            <a :href="cert.QR" target="_blank" rel="noopener noreferrer"
              >Online</a
            >
          </el-tag>
          <el-tag v-else size="mini" type="danger">
            Draft
          </el-tag>
          <!-- <el-tooltip :content="cert.published ? 'Published' : 'Draft'" placement="top">
            <el-switch
              v-model="cert.published"
              @change="publish(cert, !cert.published)"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="true"
              :inactive-value="false"
            >
            </el-switch>
          </el-tooltip> -->
        </span>

        <el-button type="text" class="button">{{
          cert.created_at | longDate
        }}</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
import certsMixin from '@/mixins/certificates'
import clipMixin from '@/mixins/clipboard'

export default {
  props: ['cert'],
  mixins: [certsMixin, clipMixin]
}
</script>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}

.clearfix:after {
  clear: both;
}
</style>
