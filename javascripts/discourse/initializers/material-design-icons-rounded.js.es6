import { withPluginApi } from "discourse/lib/plugin-api";

function initIcons(api) {
  api.replaceIcon("address-book", "m-perm_contact_calendar");
  api.replaceIcon("address-card", "m-badge");
  api.replaceIcon("adjust", "m-contrast");
  api.replaceIcon("align-left", "m-format_align_left");
  api.replaceIcon("ambulance", "m-medical_services");
  api.replaceIcon("anchor", "m-anchor");
  api.replaceIcon("angle-double-down", "m-keyboard_double_arrow_down");
  api.replaceIcon("angle-double-left", "m-keyboard_double_arrow_left");
  api.replaceIcon("angle-double-right", "m-keyboard_double_arrow_right");
  api.replaceIcon("angle-double-up", "m-keyboard_double_arrow_up");
  api.replaceIcon("angle-down", "m-keyboard_arrow_down");
  api.replaceIcon("angle-left", "m-keyboard_arrow_left");
  api.replaceIcon("angle-right", "m-keyboard_arrow_right");
  api.replaceIcon("angle-up", "m-keyboard_arrow_up");
  api.replaceIcon("archive", "m-inventory_2");
  api.replaceIcon("arrow-down", "m-arrow_downward");
  api.replaceIcon("arrow-left", "m-arrow_back");
  api.replaceIcon("arrow-right", "m-arrow_forward");
  api.replaceIcon("arrow-up", "m-arrow_upward");
  api.replaceIcon("arrows-alt-h", "m-sync_alt");
  api.replaceIcon("arrows-alt-v", "m-height");
  api.replaceIcon("asterisk", "m-emergency");
  api.replaceIcon("at", "m-alternate_email");
  api.replaceIcon("backward", "m-fast_rewind");
  api.replaceIcon("ban", "m-block");
  api.replaceIcon("bars", "m-menu");
  api.replaceIcon("bed", "m-bed");
  api.replaceIcon("bell-slash", "m-notifications_off");
  api.replaceIcon("bell", "m-notifications");
  api.replaceIcon("birthday-cake", "m-cake");
  api.replaceIcon("bold", "m-format_bold");
  api.replaceIcon("book-reader", "m-local_library");
  api.replaceIcon("book", "m-book");
  api.replaceIcon("bookmark", "m-bookmark");
  api.replaceIcon("briefcase", "m-business_center");
  api.replaceIcon("bullseye", "m-crisis_alert");
  api.replaceIcon("calendar-alt", "m-calendar_month");
  api.replaceIcon("caret-down", "m-arrow_drop_down");
  api.replaceIcon("caret-left", "m-arrow_left");
  api.replaceIcon("caret-right", "m-arrow_right");
  api.replaceIcon("caret-up", "m-arrow_drop_up");
  api.replaceIcon("certificate", "m-verified");
  api.replaceIcon("chart-bar", "m-insert_chart");
  api.replaceIcon("chart-pie", "m-pie_chart");
  api.replaceIcon("check-circle", "m-check_circle");
  api.replaceIcon("check-square", "m-check_box");
  api.replaceIcon("check", "m-check");
  api.replaceIcon("chevron-circle-down", "m-expand_circle_down");
  api.replaceIcon("chevron-down", "m-expand_more");
  api.replaceIcon("chevron-left", "m-chevron_left");
  api.replaceIcon("chevron-right", "m-chevron_right");
  api.replaceIcon("chevron-up", "m-expand_less");
  api.replaceIcon("circle", "m-lens");
  api.replaceIcon("code", "m-code");
  api.replaceIcon("cog", "m-settings");
  api.replaceIcon("columns", "m-view_column");
  api.replaceIcon("comment-slash", "m-speaker_notes_off");
  api.replaceIcon("comment", "m-comment");
  api.replaceIcon("comments", "m-forum");
  api.replaceIcon("compress", "m-compress");
  api.replaceIcon("copy", "m-content_copy");
  api.replaceIcon("credit-card", "m-credit_card");
  api.replaceIcon("crosshairs", "m-my_location");
  api.replaceIcon("cube", "m-view_in_ar");
  api.replaceIcon("d-chat", "m-chat_bubble");
  api.replaceIcon("d-drop-collapsed", "m-arrow_right");
  api.replaceIcon("d-drop-expanded", "m-arrow_drop_down");
  api.replaceIcon("d-liked", "m-favorite");
  api.replaceIcon("d-muted", "m-notifications_off");
  api.replaceIcon("d-post-share", "m-link");
  api.replaceIcon("d-regular", "m-notifications_none");
  api.replaceIcon("d-topic-share", "m-link");
  api.replaceIcon("d-tracking", "m-notifications");
  api.replaceIcon("d-unliked", "m-favorite_border");
  api.replaceIcon("d-watching-first", "m-notifications");
  api.replaceIcon("d-watching", "m-notification_important");
  api.replaceIcon("desktop", "m-computer");
  api.replaceIcon("discourse-bell-exclamation", "m-notification_important");
  api.replaceIcon("discourse-bell-one", "m-notifications");
  api.replaceIcon("discourse-bell-slash", "m-notifications_off");
  api.replaceIcon("discourse-compress", "m-close_fullscreen");
  api.replaceIcon("discourse-emojis", "m-add_reaction");
  api.replaceIcon("discourse-expand", "m-open_in_full");
  api.replaceIcon("discourse-other-tab", "m-interests");
  api.replaceIcon("download", "m-file_download");
  api.replaceIcon("ellipsis-h", "m-more_horiz");
  api.replaceIcon("ellipsis-v", "m-more_vert");
  api.replaceIcon("envelope-square", "m-mail");
  api.replaceIcon("envelope", "m-comment");
  api.replaceIcon("exchange-alt", "m-sync_alt");
  api.replaceIcon("exclamation-circle", "m-error");
  api.replaceIcon("exclamation-triangle", "m-warning");
  api.replaceIcon("external-link-alt", "m-launch");
  api.replaceIcon("fab-android", "m-android");
  api.replaceIcon("far-bell-slash", "m-notifications_off");
  api.replaceIcon("far-bell", "m-notifications");
  api.replaceIcon("far-calendar-plus", "m-insert_invitation");
  api.replaceIcon("far-chart-bar", "m-assessment");
  api.replaceIcon("far-check-square", "m-check_box");
  api.replaceIcon("far-circle", "m-circle");
  api.replaceIcon("far-clipboard", "m-content_paste");
  api.replaceIcon("far-clock", "m-schedule");
  api.replaceIcon("far-comment", "m-comment");
  api.replaceIcon("far-comments", "m-forum");
  api.replaceIcon("far-copyright", "m-copyright");
  api.replaceIcon("far-credit-card", "m-credit_card");
  api.replaceIcon("far-dot-circle", "m-radio_button_checked");
  api.replaceIcon("far-edit", "m-edit");
  api.replaceIcon("far-envelope", "m-mail");
  api.replaceIcon("far-eye-slash", "m-visibility_off");
  api.replaceIcon("far-eye", "m-visibility");
  api.replaceIcon("far-file-alt", "m-description");
  api.replaceIcon("far-frown", "m-sentiment_dissatisfied");
  api.replaceIcon("far-heart", "m-favorite_border");
  api.replaceIcon("far-image", "m-image");
  api.replaceIcon("far-list-alt", "m-list_alt");
  api.replaceIcon("far-meh", "m-sentiment_neutral");
  api.replaceIcon("far-moon", "m-dark_mode");
  api.replaceIcon("far-smile", "m-sentiment_satisfied");
  api.replaceIcon("far-square", "m-square");
  api.replaceIcon("far-star", "m-star_outline");
  api.replaceIcon("far-sun", "m-light_mode");
  api.replaceIcon("far-thumbs-down", "m-thumb_down");
  api.replaceIcon("far-thumbs-up", "m-thumb_up");
  api.replaceIcon("far-trash-alt", "m-delete");
  api.replaceIcon("fast-backward", "m-fast_rewind");
  api.replaceIcon("fast-forward", "m-fast_forward");
  api.replaceIcon("file-alt", "m-description");
  api.replaceIcon("file-audio", "m-audio_file");
  api.replaceIcon("file-image", "m-insert_photo");
  api.replaceIcon("file-invoice", "m-receipt_long");
  api.replaceIcon("file-video", "m-video_file");
  api.replaceIcon("file", "m-insert_drive_file");
  api.replaceIcon("filter", "m-filter_alt");
  api.replaceIcon("flag", "m-flag");
  api.replaceIcon("folder-open", "m-folder_open");
  api.replaceIcon("folder", "m-folder");
  api.replaceIcon("forward", "m-fast_forward");
  api.replaceIcon("gavel", "m-gavel");
  api.replaceIcon("globe-americas", "m-public");
  api.replaceIcon("globe", "m-language");
  api.replaceIcon("hand-point-right", "m-arrow_right_alt");
  api.replaceIcon("hands-helping", "m-handshake");
  api.replaceIcon("hashtag", "m-tag");
  api.replaceIcon("heart", "m-favorite");
  api.replaceIcon("history", "m-history");
  api.replaceIcon("home", "m-home");
  api.replaceIcon("hourglass-start", "m-hourglass_top");
  api.replaceIcon("id-card", "m-badge");
  api.replaceIcon("image", "m-panorama");
  api.replaceIcon("inbox", "m-inbox");
  api.replaceIcon("info-circle", "m-info");
  api.replaceIcon("italic", "m-format_italic");
  api.replaceIcon("key", "m-key");
  api.replaceIcon("keyboard", "m-keyboard");
  api.replaceIcon("layer-group", "m-layers");
  api.replaceIcon("link", "m-link");
  api.replaceIcon("list-ol", "m-format_list_numbered");
  api.replaceIcon("list-ul", "m-format_list_bulleted");
  api.replaceIcon("list", "m-list");
  api.replaceIcon("lock", "m-lock");
  api.replaceIcon("magic", "m-auto_fix_normal");
  api.replaceIcon("map-marker-alt", "m-location_on");
  api.replaceIcon("microphone-slash", "m-mic_off");
  api.replaceIcon("minus-circle", "m-remove_circle");
  api.replaceIcon("minus", "m-remove");
  api.replaceIcon("mobile-alt", "m-phone_iphone");
  api.replaceIcon("moon", "m-dark_mode");
  api.replaceIcon("notification.bookmark_reminder", "m-schedule");
  api.replaceIcon("notification.chat_quoted", "m-format_quote");
  api.replaceIcon("notification.edited", "m-edit");
  api.replaceIcon("notification.granted_badge", "m-emoji_events");
  api.replaceIcon("notification.group_mentioned", "m-group");
  api.replaceIcon("notification.group_message_summary", "m-groups");
  api.replaceIcon("notification.invited_to_private_message", "m-mail");
  api.replaceIcon("notification.invited_to_topic", "m-arrow_right_alt");
  api.replaceIcon("notification.liked_2", "m-favorite");
  api.replaceIcon("notification.liked_consolidated", "m-favorite");
  api.replaceIcon("notification.liked_many", "m-favorite");
  api.replaceIcon("notification.liked", "m-favorite");
  api.replaceIcon("notification.linked", "m-link");
  api.replaceIcon("notification.membership_request_accepted", "m-person_add");
  api.replaceIcon("notification.membership_request_consolidated", "m-groups");
  api.replaceIcon("notification.mentioned", "m-alternate_email");
  api.replaceIcon("notification.moved_post", "m-logout");
  api.replaceIcon("notification.post_approved", "m-check");
  api.replaceIcon("notification.posted", "m-notification_important");
  api.replaceIcon("notification.private_message", "m-mail");
  api.replaceIcon("notification.quoted", "m-format_quote");
  api.replaceIcon("notification.reaction", "m-notifications");
  api.replaceIcon("notification.replied", "m-reply");
  api.replaceIcon("notification.topic_reminder", "m-schedule");
  api.replaceIcon("notification.votes_released", "m-add");
  api.replaceIcon(
    "notification.watching_category_or_tag",
    "m-notification_important"
  );
  api.replaceIcon("notification.watching_first_post", "m-notifications");
  api.replaceIcon("paint-brush", "m-brush");
  api.replaceIcon("paper-plane", "m-send");
  api.replaceIcon("pause", "m-pause");
  api.replaceIcon("pencil-alt", "m-edit");
  api.replaceIcon("play", "m-play_arrow");
  api.replaceIcon("plug", "m-power");
  api.replaceIcon("plus-circle", "m-add_circle");
  api.replaceIcon("plus-square", "m-add_box");
  api.replaceIcon("plus", "m-add");
  api.replaceIcon("power-off", "m-power_settings_new");
  api.replaceIcon("puzzle-piece", "m-extension");
  api.replaceIcon("question-circle", "m-help_outline");
  api.replaceIcon("question", "m-question_mark");
  api.replaceIcon("quote-right", "m-format_quote");
  api.replaceIcon("random", "m-shuffle");
  api.replaceIcon("redo", "m-redo");
  api.replaceIcon("reply", "m-reply");
  api.replaceIcon("rocket", "m-rocket_launch");
  api.replaceIcon("save", "m-save");
  api.replaceIcon("search", "m-search");
  api.replaceIcon("share-alt", "m-share");
  api.replaceIcon("share", "m-share");
  api.replaceIcon("shield-alt", "m-security");
  api.replaceIcon("shield", "m-shield");
  api.replaceIcon("sign-in-alt", "m-login");
  api.replaceIcon("sign-out-alt", "m-logout");
  api.replaceIcon("signal", "m-signal_cellular_alt");
  api.replaceIcon("sliders-h", "m-tune");
  api.replaceIcon("sliders", "m-tune");
  api.replaceIcon("smile", "m-mood");
  api.replaceIcon("sort", "m-sort");
  api.replaceIcon("spinner", "m-pending");
  api.replaceIcon("square-full", "m-square");
  api.replaceIcon("stamp", "m-approval");
  api.replaceIcon("star", "m-star");
  api.replaceIcon("step-backward", "m-skip_previous");
  api.replaceIcon("step-forward", "m-skip_next");
  api.replaceIcon("stream", "m-clear_all");
  api.replaceIcon("sun", "m-light_mode");
  api.replaceIcon("sync-alt", "m-sync");
  api.replaceIcon("sync", "m-sync");
  api.replaceIcon("table", "m-table_chart");
  api.replaceIcon("tag", "m-sell");
  api.replaceIcon("tags", "m-sell");
  api.replaceIcon("tasks", "m-checklist");
  api.replaceIcon("thermometer-three-quarters", "m-device_thermostat");
  api.replaceIcon("thumbs-down", "m-thumb_down");
  api.replaceIcon("thumbs-up", "m-thumb_up");
  api.replaceIcon("thumbtack", "m-push_pin");
  api.replaceIcon("times-circle", "m-highlight_off");
  api.replaceIcon("times", "m-close");
  api.replaceIcon("toggle-off", "m-toggle_off");
  api.replaceIcon("toggle-on", "m-toggle_on");
  api.replaceIcon("trash-alt", "m-delete");
  api.replaceIcon("undo", "m-undo");
  api.replaceIcon("unlink", "m-link_off");
  api.replaceIcon("unlock-alt", "m-lock_open");
  api.replaceIcon("unlock", "m-lock_open");
  api.replaceIcon("upload", "m-file_upload");
  api.replaceIcon("user-cog", "m-manage_accounts");
  api.replaceIcon("user-edit", "m-manage_accounts");
  api.replaceIcon("user-friends", "m-people");
  api.replaceIcon("user-plus", "m-person_add");
  api.replaceIcon("user-secret", "m-person_off");
  api.replaceIcon("user-shield", "m-admin_panel_settings");
  api.replaceIcon("user-times", "m-person_remove");
  api.replaceIcon("user", "m-person");
  api.replaceIcon("users", "m-group");
  api.replaceIcon("wrench", "m-build");
}

export default {
  name: "material-design-icons-rounded",
  initialize() {
    withPluginApi("0.10.1", initIcons);
  }
};
