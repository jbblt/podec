import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { type Gender } from 'models/enum/commonEnum';
import React from 'react';

// Create styles
const styles = StyleSheet.create({
  bodyContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e3dfdf',
    borderRadius: 50,
  },
  cardContainerSmall: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    flex: 1,
    borderColor: 'black',
    borderRadius: 50,
    marginTop: 5,
    marginBottom: 5,
  },
  cardContainerMedium: {
    marginTop: 5,
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    flex: 2,
    borderColor: 'black',
    borderRadius: 50,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  containHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});

type MyDocumentProps = {
  form: {
    firstname: string;
    lastname: string;
    gender: Gender;
    number: number;
    formNumber: number;
  };
};

// Create Document Component
export const MyDocument = ({ form: { firstname, lastname, gender, number, formNumber } }: MyDocumentProps) => (
  <Document>
    <Page size="A4">
      <View style={styles.bodyContainer}>
        <View style={styles.cardContainerSmall}>
          {/* <Image */}
          {/*	style={{width: 250, height: '100%', borderRadius: 50}} */}
          {/*	source={'./img.png'} */}
          {/* /> */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Fiche De Fabrication</Text>
            <View style={styles.containHeader}>
              <View>
                <Text>Prénom : {lastname}</Text>
                <Text>Nom : {firstname}</Text>
                <Text>Sexe : {gender}</Text>
              </View>
              <View>
                <Text>Date: </Text>
                <Text>Patient # : {number}</Text>
                <Text>Formes # : {formNumber}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardContainerMedium} />
        <View style={styles.cardContainerSmall} />
        <View style={styles.cardContainerMedium} />
        <View style={styles.cardContainerMedium} />
      </View>
    </Page>
  </Document>
);
