import React,{useState} from "react";  

import { View, 
         Text,
        StyleSheet , 
        TouchableOpacity, 
        ScrollView, 
        Pressable,
        FlatList,
        Image } from "react-native";   
import { Icon } from "react-native-elements";
import HomeHeader from "../components/HomeHeader";
import {colors,paramenters} from "../global/styles"
import { Collapse,CollapseHeader, CollapseBody, AccordionList } from "accordion-collapse-react-native";
import {filterData} from "../global/Data"

export default function HomeScreen(){

    const [delivery,setDelivery] = useState(true)
    const [indexCheck,setIndexCheck] = useState("0")
    const [frist,setFrist] = useState(false)

    return(
        <View style={styles.container}>
            <HomeHeader/>
            <ScrollView
                stickyHeaderIndices={0}//???
                showsVerticalScrollIndicator={true}

            >
            
                <View> 
                    <View style = {{marginTop:10,flexDirection:'row',alignContent:"center",justifyContent:"center"}}>
                        <View style = {{marginTop:8, flexDirection:"row",justifyContent:"center"}}>
                            <TouchableOpacity
                                onPress={()=>{
                                    setDelivery(true)
                                }}
                            
                            >
                                <View style = {{...styles.deliveryBL,backgroundColor:delivery?colors.buttons:colors.grey4}}>
                                    <Text style = {styles.deliveryT}>배달</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style = {{marginTop:8, flexDirection:"row",justifyContent:"center"}}>
                            <TouchableOpacity
                                onPress={()=>{
                                    setDelivery(false)
                                }}
                            >
                                <View style = {{...styles.deliveryBR,backgroundColor:delivery?colors.grey4:colors.buttons}}>
                                    <Text style = {styles.deliveryT}>포장</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        
                    </View>
                    <View style = {styles.fileterView}>
                        <View style = {styles.markView}>
                                    <View style = {{flexDirection:"row",alignItems:"center",paddingLeft:10}}>
                                        <Icon
                                            type="material-community"
                                            name="map-marker"
                                            color={colors.grey1}
                                            size={26}
                                        />
                                        <Text style={{marginLeft:5}}> 배달할 위치</Text>
                                    </View>

                                    <View style = {styles.inconColckView}>
                                        <Icon
                                            type="material-community"
                                            name="clock-time-seven"
                                            color={colors.grey1}
                                            size={26}
                                        />

                                        <Text style={{marginLeft:5, marginHorizontal:15}}> 현재</Text>
                                    </View>    
                            </View>

                            <View>
                                    <Icon
                                            type="material-community"
                                            name="tune"
                                            color={colors.grey1}
                                            size={26}
                                        />
                            </View>
                    </View>
                </View>
                
            {/* 접고 피는 부분 확인하기*/}
            <Collapse>
                <CollapseHeader
                >
                <View style = {styles.hearTextView}>
                    <Text style= {styles.headerText}>Click here</Text>
                    <Icon
                                            type="material-community"
                                            name="folder"
                                            color={colors.grey1}
                                            size={30}
                                            marginRight={15}
                                            
                                        />
                 </View>
                </CollapseHeader>
                <CollapseBody>
                    <View>
                        <FlatList 
                                
                                data={filterData}
                                horizontal = {true}//옆으로 이동 
                                showsHorizontalScrollIndicator = {false} 
                                keyExtractor = {(item)=>item.id}
                                extraData = {indexCheck}
                                //numColumns={5}
                                renderItem = {({item,index})=>(
                                    <Pressable
                                        onPress={()=>{setIndexCheck(item.id)}}
                                    >
                                        <View style = {indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                                            <Image
                                                style = {{height:60,width:60,borderRadius:30}}
                                                source = {item.image}
                                            />

                                            <View>
                                                <Text style = {indexCheck === item.id ? {...styles.smallCardTextSected}:
                                                {...styles.smallCardText}}>{item.name}</Text>
                                            </View>
                                        </View>

                                        
                                    </Pressable>
                                )}
                                
                        />
                    </View>
                </CollapseBody>
                </Collapse>

            {/* 시작점*/}      
                <Collapse>
                <CollapseHeader>
                <View style = {styles.hearTextView}>  
                    <Text style= {styles.headerText}>무료 배송</Text>
                    <Icon
                        type="material-community"
                        name="folder"
                        color={colors.grey1}
                        size={30}
                        marginRight={15}                          
                    />
                 </View>
                </CollapseHeader>
                <CollapseBody>
                    <View>
                        <Text>text 지우고 여기다가 하면 됨</Text> 
                    </View>
                </CollapseBody>
                </Collapse>
                                    {/*끝점 */}    
                

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
    },

    deliveryBL:{
        paddingHorizontal:20,
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        paddingVertical:5,
    },

    deliveryBR:{
        paddingHorizontal:20,
        borderTopRightRadius:20,
        borderBottomRightRadius:20,
        paddingVertical:5,
    },
    deliveryT:{
        marginLeft:5,
        fontSize:18,

    },
    fileterView:{
        flexDirection:"row", 
        alignItems:"center",
        justifyContent:"space-evenly",
        marginHorizontal:20,
        marginTop:10,
        
    },
    inconColckView:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:10,
        backgroundColor:colors.cardbackground,
        borderRadius:20,
        paddingHorizontal:5,
        marginRight:20,
    },
    markView:{
        flexDirection:"row",
        borderRadius:20,
        backgroundColor:colors.grey4,
        paddingVertical:5,//-5
        paddingHorizontal:20
    },
    headerText:{
        color:colors.grey2,
        fontSize:20,
        fontWeight:"bold",
        paddingLeft:12,
    },
    
    hearTextView:{
        backgroundColor:colors.grey5,
        marginTop:15,
        paddingVertical:2,
        flexDirection:"row",
        justifyContent:"space-between",
        
    },

    smallCard:{
        borderRadius:30,
        backgroundColor:colors.cardbackground,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:80,
        margin:10,
        height:100
    },

    smallCardSelected:{
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:"center",
        alignItems:"center",
        padding:5,
        width:80,
        margin:10,
        height:100
    },

    smallCardTextSected : {
        fontWeight:"bold",
        color:colors.cardbackground,
        fontSize:11
    },

    smallCardText : {
        fontWeight:"bold",
        color:colors.grey2,
        fontSize:11
    }
    
    
})