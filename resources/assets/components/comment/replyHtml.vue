<template>
    <div class="media comment_item type_reply">
        <div class="media-left media-top img_wrapper">
            <img :src="">
        </div>
        <div class="media-body comment_body">
            <div class="sub_mes">
                <span class="comment_user_name"></span>
                <span class="reply">回复</span>
                <span class="replyer_name"></span>
                <span class="date">刚刚</span></div>
            <p class="comment_content"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "replyHtml"
    }
</script>

<style scoped>

</style>