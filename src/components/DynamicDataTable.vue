<template>
  <div>
    <v-data-table
      :headers="computedHeaders"
      :items="computedItems">
    <template v-slot:[`item.properties.hasRows`]="{ item }">
      {{ item  }}
    </template>
    </v-data-table>
  </div>
</template>

<script>
import Payload from "../data/payload.json";
import {camelCase} from "lodash";

export default {
  data() {
    return {
      payload: Payload,
      worklistData: Payload.payload,
    };
  },
  computed: {
    computedHeaders() {
      const columns = this.payload.metadata.template.columns;
      const headers = [];
      let header = {};

      columns.forEach((column) => {
        let value = camelCase(column.dataItem.fieldName);
        const dataType = column.dataItem.subDataType??column.dataItem.dataType;

        switch (dataType) {
          case "String":
          case "DateTime":
          case "DateTime?":
            break;
          case "WorkListPatient":
            value = `${value}.microBannerDisplayValues`;
            break;
          default:
            value = `${value}.name`;
            break;
        }


        header = {
          text: column.dataItem.label,
          value: value,
        };

        headers.push(header);
      });

      console.debug(headers);
      return headers;
    },
    computedItems() {
      const items = [];

      Payload.payload.forEach((item) => {
        // for (const property in item) {
        //   //const matchedColumn = this.payload.metadata.template.columns.find(column => column.dataItem.fieldName === property);

        //   // try {
        //   //   if (matchedColumn) {
        //   //     item[property].properties = matchedColumn?.dataItem.properties || {};
        //   //   }
        //   // }
        //   // catch(e) {
        //   //   console.debug(e);
        //   // }
        // }

        items.push(item);
      });

      console.debug(items);
      return items;
    },
  },
};
</script>
