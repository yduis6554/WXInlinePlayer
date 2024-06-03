import WXInlinePlayer from ".";
import wxplay from WXInlinePlayer

class CortoiPlayer extends EventEmitter {
    static isInited = false;
    constructor({
        url = "",
        $container,
        hasVideo = true,
        hasAudio = true,
        volume = 1.0,
        muted = false,
        autoplay = false,
        loop = false,
        isLive = false,
        chunkSize = 256 * 1024,
        preloadTime = 1e3,
        bufferingTime = 3e3,
        cacheSegmentCount = 128,
        /*cacheInMemory = false,*/
        customLoader = null,
      }) {
        super();
        this.url = url;
        this.$container = $container;
        this.width = $container.width;
        this.height = $container.height;
        this.hasVideo = hasVideo;
        this.hasAudio = hasAudio;
        this.vol = volume;
        this.muted = muted;
        this.duration = 0;
        this.autoplay = autoplay;
        this.loop = loop;
        this.isLive = isLive;
        this.chunkSize = chunkSize;
        this.preloadTime = preloadTime;
        this.bufferingTime = bufferingTime;
        this.cacheSegmentCount = cacheSegmentCount;
        /*this.cacheInMemory = cacheInMemory;*/
        this.customLoader = customLoader;
        this.timeUpdateTimer = null;
        this.isInitlize = false;
        /**解码完 */
        this.isDecodeEnd = false;
        /**播放完 */
        this.isEnd = false;
        this.state = STATE.created;
        this.timestapmArr = []; //时间戳数组
    
        if (
          //(/*(hasVideo && !hasAudio) ||  //这个条件表达式很奇怪，不符合一般API封装的逻辑，或者说WXInlinePlayer作为抽象的API，不用在当前layer考虑特殊具体业务场景的组合情况，所以注释掉 */
          //Util.isWeChat() /* 微信自动播放？也建议后续去掉这个具体的业务逻辑 */) ||
          this.autoplay /*autoplay如果是true就应该自动播放*/
        ) {
          this.play();
        }
    }
}
window.CortoiPlayer = WXInlinePlayer;

export default CortoiPlayer;
