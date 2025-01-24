export enum ContentType {
    // Textual types
    TEXT_PLAIN = "text/plain",
    TEXT_HTML = "text/html",
    TEXT_CSS = "text/css",
    TEXT_JAVASCRIPT = "text/javascript",
  
    // JSON and XML
    APPLICATION_JSON = "application/json",
    APPLICATION_XML = "application/xml",
  
    // Form submissions
    APPLICATION_FORM_URLENCODED = "application/x-www-form-urlencoded",
    MULTIPART_FORM_DATA = "multipart/form-data",
  
    // File types
    APPLICATION_PDF = "application/pdf",
    IMAGE_PNG = "image/png",
    IMAGE_JPEG = "image/jpeg",
    IMAGE_GIF = "image/gif",
    IMAGE_WEBP = "image/webp",
  
    // Audio and video
    AUDIO_MPEG = "audio/mpeg",
    VIDEO_MP4 = "video/mp4",
    VIDEO_WEBM = "video/webm",
  
    // Other types
    APPLICATION_OCTET_STREAM = "application/octet-stream", // Generic binary
    APPLICATION_ZIP = "application/zip",
    APPLICATION_GZIP = "application/gzip",
  }
  