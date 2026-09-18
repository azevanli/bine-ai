"use client";

import React, { useEffect, useRef } from "react";

export interface LiquidMetalButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function LiquidMetalButton({
  label = "Explore Bine",
  onClick,
  className = "",
}: LiquidMetalButtonProps) {
  const shaderRef = useRef<HTMLDivElement>(null);
  const shaderMount = useRef<{ destroy?: () => void } | null>(null);

  useEffect(() => {
    const styleId = "liquid-metal-button-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .shader-container-exploded canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 9999px !important;
          pointer-events: none !important;
          opacity: 0.85 !important;
          filter: hue-rotate(280deg) saturate(1.8) brightness(1.1) !important;
        }
      `;
      document.head.appendChi‡7G–ÆR“°¢Ğ ¢6öç7BÆöE6†FW"Ò7–æ2‚’Óâ°¢G'’°¢6öç7B²Æ—V–DÖWFÄg&vÖVçE6†FW"Â6†FW$Ö÷VçBÒÒv—B–×÷'B€¢$W"ÖFW6–vâ÷6†FW'2 ¢“°¢–b‡6†FW%&Vbæ7W'&VçB’°¢–b‡6†FW$Ö÷VçBæ7W'&VçCòæFW7G&÷’’°¢6†FW$Ö÷VçBæ7W'&VçBæFW7G&÷’‚“°¢Ğ¢6†FW$Ö÷VçBæ7W'&VçBÒæWr6†FW$Ö÷VçB€¢6†FW%&Vbæ7W'&VçBÀ¢Æ—V–DÖWFÄg&vÖVçE6†FW"À¢°¢U÷&WWF—F–öã¢BÀ¢U÷6ögFæW73¢ãRÀ¢U÷6†–gE&VC¢ãbÀ¢U÷6†–gD&ÇVS¢ã’À¢UöF—7F÷'F–öã¢ã"À¢Uö6öçF÷W#¢ãÀ¢UöævÆS¢CRÀ¢U÷66ÆS¢‚À¢U÷6†S¢À¢Uööfg6WEƒ¢ãÀ¢Uööfg6WE“¢ÓãÀ¢ÒÀ¢VæFVf–æVBÀ¢ã`¢“°¢Ğ¢Ò6F6‚†W'&÷"’°¢6öç7B–væ÷&TW'&÷"ÒW'&÷#°¢Ğ¢Ó° ¢ÆöE6†FW"‚“° ¢&WGW&â‚’Óâ°¢–b‡6†FW$Ö÷VçBæ7W'&VçCòæFW7G&÷’’°¢6†FW$Ö÷VçBæ7W'&VçBæFW7G&÷’‚“°¢Ğ¢Ó°¢ÒÂµÒ“° ¢&WGW&â€¢Æ'WGFöà¢öä6Æ–6³×¶öä6Æ–6·Ğ¢6Æ74æÖS×&VÆF—fR–æÆ–æRÖfÆW‚—FV×2Ö6VçFW"§W7F–g’Ö6VçFW"÷fW&fÆ÷rÖ†–FFVâ&÷VæFVBÖgVÆÂ‚Ó‚’Ó2ãRFW‡B×6ÒföçB×6VÖ–&öÆBFW‡B×v†—FRG&ç6—F–öâÖÆÂ†÷fW#§66ÆRÓR6†F÷r×†Â†÷fW#§6†F÷r×–æ²ÓSó3w&÷WG¶6Æ74æÖWÖà¢à¢ÆF—b&Vc×·6†FW%&VgÒ6Æ74æÖSÒ'6†FW"Ö6öçF–æW"ÖW‡ÆöFVB'6öÇWFR–ç6WBÓ¢Ó&rÖw&F–VçB×Fò×"g&öÒ×6ÆFRÓ“f–×–æ²Ó“SFò×6ÆFRÓ“"óà¢Ç7â6Æ74æÖSÒ'&VÆF—fR¢ÓfÆW‚—FV×2Ö6VçFW"vÓ"#à¢Ç7ãç¶Æ&VÇÓÂ÷7ãà¢Ç7fp¢6Æ74æÖSÒ'rÓB‚ÓBG&ç6—F–öâ×G&ç6f÷&Òw&÷WÖ†÷fW#§G&ç6ÆFR×‚ÓFW‡B×–æ²Ó3 ¢f–ÆÃÒ&æöæR ¢7G&ö¶SÒ&7W'&VçD6öÆ÷" ¢7G&ö¶Uv–GFƒÒ#" ¢f–Wt&÷ƒÒ##B#B ¢à¢ÇF‚CÒ$ÓR&ƒDÓ"VÃrrÓrr"óà¢Â÷7fsà¢Â÷7ãà¢Âö'WGFöãà¢“°§Ğ